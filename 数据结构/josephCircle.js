/*
    传说在公元 1 世纪的犹太战争中,犹太历史学家弗拉维奥·约瑟夫斯和他的 40 个同胞
    被罗马士兵包围。犹太士兵决定宁可自杀也不做俘虏,于是商量出了一个自杀方案。他
    们围成一个圈,从一个人开始,数到第三个人时将第三个人杀死,然后再数,直到杀光
    所有人。约瑟夫和另外一个人决定不参加这个疯狂的游戏,他们快速地计算出了两个位
    置,站在那里得以幸存。写一段程序将 n 个人围成一圈,并且第 m 个人会被杀掉,计算
    一圈人中哪两个人最后会存活。使用循环链表解决该问题。
*/

//节点类
function Node(element) {
    this.element = element;
    this.next = null;
}

//循环链表
function LList() {
    this.head = new Node(1);
    this.head.next = this.head;
}
LList.prototype.find = function(element) {
    var curNode = this.head;
    while(curNode.next != this.head && curNode.element != element) {
        curNode = curNode.next;
    }
    return curNode;
}
LList.prototype.insert = function(newELement, target) {
    var newNode = new Node(newELement);
    var curNode = this.find(target);
    newNode.next = curNode.next;
    curNode.next = newNode;
}
LList.prototype.findPre = function(target) {
    var curNode = this.head;
    while(curNode.next.element != target && curNode.next != this.head) {
        curNode = curNode.next;
    }
    return curNode;
}
LList.prototype.remove = function(element) {
    var preNode = this.findPre(element);
    preNode.next = preNode.next.next;
}

LList.prototype.kill = function(n,m) {
    var curNode = this.head;
    var killNode;
    var sum = n;
    while(sum > 0) {
        sum--;
        for(var i = 1; i < m;i++) {
            curNode = curNode.next;
        }
        //得到杀死的人  和  下一个开始报数的人
        killNode = curNode;
        curNode = killNode.next;

        console.log(killNode.element);

        this.remove(killNode.element);
    }
}
var list = new LList();
var n = 40;
var m = 3;
for(var i = 2;i <= n; i++) {
    list.insert(i, i - 1);
}
list.kill(n, m);
