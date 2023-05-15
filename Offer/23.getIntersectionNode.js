// 剑指 Offer II 023. 两个链表的第一个重合节点
// 给定两个单链表的头节点 headA 和 headB ，请找出并返回两个单链表相交的起始节点。
// 如果两个链表没有交点，返回 null 。图示两个链表在节点 c1 开始相交：
// 题目数据 保证 整个链式结构中不存在环。
// 注意，函数返回结果后，链表必须 保持其原始结构 。
/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    let l1 = headA, l2 = headB;
    while(l1 !== l2){
        l1 === null ? l1 = headB : l1 = l1.next;
        l2 === null ? l2 = headA : l2 = l2.next;
    }
    return l1 === null ? null : l1;
}


// 输入：intersectVal = 8, listA = [4,1,8,4,5], listB = [5,0,1,8,4,5], skipA = 2, skipB = 3
// 输出：Intersected at '8'
// 解释：相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。
// 从各自的表头开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,0,1,8,4,5]。
// 在 A 中，相交节点前有 2 个节点；在 B 中，相交节点前有 3 个节点。