// 78. 子集
// 给你一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。
// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
    let res = [];
    let track = [];
    const BST = function(nums,track,start){
        res.push(track.slice());
        for(let i = start ; i < nums.length ; i++){
            track.push(nums[i]);
            BST(nums,track,i + 1);
            track.pop()
        }
    }
    BST(nums,track,0);
    return res;
}

const nums = [1,2,3];
console.log(subsets(nums));

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 输入：nums = [0]
// 输出：[[],[0]]