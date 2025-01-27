/**
 * @description
 * 你是一个专业的小偷，计划偷窃沿街的房屋。
 * 每间房内都藏有一定的现金，影响你偷窃的唯一制约因素就是相邻的房屋装有相互连通的防盗系统，
 * 如果两间相邻的房屋在同一晚上被小偷闯入，系统会自动报警。
 * 给定一个代表每个房屋存放金额的非负整数数组，计算你 不触动警报装置的情况下 ，一夜之内能够偷窃到的最高金额。
 */

/**
 * @example
 * 输入：[1,2,3,1]
 * 输出：4
 * 解释：偷窃 1 号房屋 (金额 = 1) ，然后偷窃 3 号房屋 (金额 = 3)。
 * 偷窃到的最高金额 = 1 + 3 = 4 。
 */

/**
 * @function
 * @param nums 数组
 * @returns 金额
 * @description 倒着数，偷第i间，总金额为前i-2间+第i间的和，偷第i-1间，金额为前i-1间的和
 */
function rob(nums: number[]): number {
    let l = nums.length
    if (l === 1) return nums[0]
    if (l == 2) return Math.max(nums[0], nums[1])
    let dp: number[] = []
    dp[0] = nums[0]
    dp[1] = Math.max(nums[0], nums[1])
    for (let i = 2; i < l; i++) {
        dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1])
    }
    return dp[l - 1]
};

console.log(rob([1, 2, 3, 1]));
