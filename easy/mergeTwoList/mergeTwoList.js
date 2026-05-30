var mergeTwoLists = function (list1, list2) {
  // make an empty mergedArray
  // loop through the longest array
  // if list1[i] > list2[i] then put on list, vice versa

  let mergedList = new ListNode(0);
  let loopMax = list1.length > list2.length ? list1.length : list2.length;
  for (let i = 0; i < loopMax; i++) {
    if (list1[i] <= list2[2]) {
      mergedList.next = new ListNode(list1[i]);
      mergedList.next = new ListNode(list2[i]);
    } else {
      mergedList.next = new ListNode(list2[i]);
      mergedList.next = new ListNode(list1[i]);
    }
  }
  return mergedList;
};
// list1 = [1,2,4], list2 = [1,3,4]
console.log(mergeTwoLists([1, 2, 4], [1, 3, 4]));
// NOT FINISHED
