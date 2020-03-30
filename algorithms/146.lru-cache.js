/*
 * @lc app=leetcode id=146 lang=javascript
 *
 * [146] LRU Cache
 *
 * https://leetcode.com/problems/lru-cache/description/
 *
 * algorithms
 * Medium (30.36%)
 * Total Accepted:    455K
 * Total Submissions: 1.5M
 * Testcase Example:  '["LRUCache","put","put","get","put","get","put","get","get","get"]\n[[2],[1,1],[2,2],[1],[3,3],[2],[4,4],[1],[3],[4]]'
 *
 * Design and implement a data structure for Least Recently Used (LRU) cache.
 * It should support the following operations: get and put.
 * 
 * get(key) - Get the value (will always be positive) of the key if the key
 * exists in the cache, otherwise return -1.
 * put(key, value) - Set or insert the value if the key is not already present.
 * When the cache reached its capacity, it should invalidate the least recently
 * used item before inserting a new item.
 * 
 * The cache is initialized with a positive capacity.
 * 
 * Follow up:
 * Could you do both operations in O(1) time complexity?
 * 
 * Example:
 * 
 * 
/**
 * @param {number} capacity
 */

// 哈希双链表
// 哈希表 存储双向链表中的 Node，可以做到查找为 O(1)
// 双向链表可以做到，删除、插入为 O(1)，先哈希表查，查到了再左一系列操作
class Node {
  constructor(key, val) {
    this.key = key;
    this.val = val;
  }
}

class DoubleList {
  constructor() {
    this.head = new Node(0, 0);
    this.tail = new Node(0, 0);
    this.head.next = this.tail;
    this.tail.prev = this.head;
    this.size = 0;
  }

  addFirst(node) {
    node.next = this.head.next;
    node.prev = this.head;
    this.head.next.prev = node;
    this.head.next = node;
    this.size++;
  }

  remove(node) {
    node.prev.next = node.next;
    node.next.prev = node.prev;
    this.size--;
  }

  removeLast() {
    if (this.tail.prev === this.head) {
      return null;
    }
    const last = this.tail.prev;
    this.remove(last);
    return last;
  }
}

const LRUCache = function (capacity) {
  this.cap = capacity;
  this.map = new Map();
  this.cache = new DoubleList();
};

/** 
 * @param {number} keyf
 * @return {number}
 */
LRUCache.prototype.get = function (key) {
  if (!this.map.has(key)) {
    return -1;
  }
  const val = this.map.get(key).val;
  this.put(key, val);
  return val;
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function (key, value) {
  const node = new Node(key, value);
  if (this.map.has(key)) {
    this.cache.remove(this.map.get(key));
    this.cache.addFirst(node);
    this.map.set(key, node);
  } else {
    if (this.cap === this.cache.size) {
      const last = this.cache.removeLast();
      this.map.delete(last.key);
    }
    this.cache.addFirst(node);
    this.map.set(key, node);
  }
};

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

