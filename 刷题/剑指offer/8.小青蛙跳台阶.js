// 一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 n 级的台阶总共有多少种跳法。

// 答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。

// 实际上就是斐波那契数列
/**
 * @param {number} n
 * @return {number}
 */
var numWays = function (n) {
  if (n == 0 || n == 1) return 1
  let p = 1, q = 1, r = 2
  for (let i = 2; i <= n; i++) {
    r = (p + q) % 1000000007
    p = q
    q = r
  }
  return r
};