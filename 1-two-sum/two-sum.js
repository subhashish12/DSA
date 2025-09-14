/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    //check submission sync one to sync
    let h_map = {}
    for(let i = 0; i < nums.length; i++){
        let diff = target - nums[i];
        if( diff in  h_map){
            return [h_map[diff], i ]
        }else{
            h_map[nums[i]] = i;
        }
    }
};