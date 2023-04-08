// 15. 三数之和
// 给你一个整数数组 nums ，判断是否存在三元组 [nums[i], nums[j], nums[k]] 满足 i != j、i != k 且 j != k ，
// 同时还满足 nums[i] + nums[j] + nums[k] == 0 。请
// 你返回所有和为 0 且不重复的三元组。
// 注意：答案中不可以包含重复的三元组。
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    let ThreeSum = function(nums, target){
        let res = [];
        // 排序
        nums.sort((a,b)=>a - b)
        for(let i = 0; i < nums.length; i++){
            let two_value = twoSum(nums, i + 1, target - nums[i]);
            for(let value of two_value){
                value.push(nums[i]);
                res.push(value);
            }
            // 防止重复
            while(i < nums.length && nums[i] === nums[i + 1])i++
        }
        
        return res;
    }
    let twoSum = function(nums, start, target){
        let ans = [];
        let i = start, j = nums.length - 1;
        while(i < j){
            let sum = nums[i] + nums[j];
            let left = nums[i], right = nums[j];
            if(sum > target){
                while(i < j && nums[j] === right)j--;
            }else if(sum < target){
                while(i < j && nums[i] === left)i++;
            }else{
                ans.push([nums[i], nums[j]]);
                while(i < j && nums[i] === left)i++;
                while(i < j && nums[j] === right)j--;
            }
        }
        return ans;
    }
    return ThreeSum(nums, 0);
}

const nums = [-1,0,1,2,-1,-4];
console.log(threeSum(nums));

// 输入：nums = [-1,0,1,2,-1,-4]
// 输出：[[-1,-1,2],[-1,0,1]]
// 解释：
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0 。
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0 。
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0 。
// 不同的三元组是 [-1,0,1] 和 [-1,-1,2] 。
// 注意，输出的顺序和三元组的顺序并不重要。