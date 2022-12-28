// 496. 下一个更大元素 I
// nums1 中数字 x 的 下一个更大元素 是指 x 在 nums2 中对应位置 右侧 的 第一个 比 x 大的元素。
// 给你两个 没有重复元素 的数组 nums1 和 nums2 ，下标从 0 开始计数，其中nums1 是 nums2 的子集。
// 对于每个 0 <= i < nums1.length ，找出满足 nums1[i] == nums2[j] 的下标 j ，
// 并且在 nums2 确定 nums2[j] 的 下一个更大元素 。如果不存在下一个更大元素，那么本次查询的答案是 -1 。
// 返回一个长度为 nums1.length 的数组 ans 作为答案，满足 ans[i] 是如上所述的 下一个更大元素 。
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var nextGreaterElement = function(nums1, nums2) {
    let stack = [],ans = new Array(nums1.length),map = new Map();
    for(let i=nums2.length-1;i>=0;i--){
        while(stack.length!==0 && stack[stack.length-1]<=nums2[i]){
            stack.pop();
        }
        if(stack.length!==0){
            map.set(nums2[i],stack[stack.length-1]);
        }else{
            map.set(nums2[i],-1);
        }
        stack.push(nums2[i]);
    }
    for(let i=0;i<nums1.length;i++){
        ans[i]=map.get(nums1[i]);
    }
    return ans;
}

const nums1 = [4,1,2], nums2 = [1,3,4,2];
console.log(nextGreaterElement(nums1,nums2));

// 输入：nums1 = [4,1,2], nums2 = [1,3,4,2].
// 输出：[-1,3,-1]
// 解释：nums1 中每个值的下一个更大元素如下所述：
// - 4 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
// - 1 ，用加粗斜体标识，nums2 = [1,3,4,2]。下一个更大元素是 3 。
// - 2 ，用加粗斜体标识，nums2 = [1,3,4,2]。不存在下一个更大元素，所以答案是 -1 。
