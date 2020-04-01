/*
 * @lc app=leetcode id=86 lang=javascript
 *
 * [86] Partition List
 *
 * https://leetcode.com/problems/partition-list/description/
 *
 * algorithms
 * Medium (40.00%)
 * Total Accepted:    199.1K
 * Total Submissions: 497.3K
 * Testcase Example:  '[1,4,3,2,5,2]\n3'
 *
 * Given a linked list and a value x, partition it such that all nodes less
 * than x come before nodes greater than or equal to x.
 * 
 * You should preserve the original relative order of the nodes in each of the
 * two partitions.
 * 
 * Example:
 * 
 * 
 * Input: head = 1->4->3->2->5->2, x = 3
 * Output: 1->2->2->4->3->5
 * 
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */

function ListNode(val) {
  this.val = val;
  this.next = null;
}
// 链表的基础操作，与常规的链表 addFirst 不同，该题要保证链表的原始顺序，
// 因此每次添加需要在链表的末端添加
// 创建两条链表，一条放小于 x 的值，一条放大于等于 x 的值
// 关键在于链表末尾添加，需要一个尾随节点，不断的移动未知，在原始节点上不断添加 next
const partition = function (head, x) {
  const listNode = new ListNode(0);
  listNode.next = head;
  const smallNode = new ListNode(0);
  const largeNode = new ListNode(0);

  let currentNode = listNode.next;
  let currentSmallPoint = smallNode; // 尾随节点
  let currentLargePoint = largeNode; // 尾随节点
  while (currentNode) {
    if (currentNode.val < x) {
      currentSmallPoint.next = currentNode;
      currentSmallPoint = currentSmallPoint.next; // 变化尾随节点的位置，指向最后一个节点
    } else {
      currentLargePoint.next = currentNode;
      currentLargePoint = currentLargePoint.next; // 变化尾随节点的位置，指向最后一个节点
    }
    currentNode = currentNode.next; // 切换原始节点
  }
  currentLargePoint.next = null;
  currentSmallPoint.next = largeNode.next;
  return smallNode.next;
};
