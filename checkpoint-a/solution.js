// Checkpoint A — your work goes in this file.
//
// Read checkpoint-a/spec.md. It was written for your GitHub account and it is
// the only description of the task that matters.
//
// Check your work with:  npm test a

import { findAllOrders, findOrderById } from "./orders-db.js";


export async function loadOrders() {
  const orders = await findAllOrders();
  return orders;
}

export function myOrders(orders) {
  return orders.filter(order =>
    order.city === "Cairo" &&
    order.status === "cancelled"
  );
}

export function summarize(orders) {
  return orders.reduce((highest, order) => {
    return Math.max(highest, order.price);
  }, 0);
}

export async function describeOrder(id) {
  try {
    const order = await findOrderById(id);
    return `${order.quantity} x ${order.item} for ${order.student}`;
  } catch (error) {
    return `Order ${id} not found`;
  }
}

export function toJsonLines(orders) {
  const result = orders.map(order => ({
    item: order.item,
    quantity: order.quantity
  }));

  return JSON.stringify(result);
}

