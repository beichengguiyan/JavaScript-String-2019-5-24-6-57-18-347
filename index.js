// 阅读以上推荐链接，了解所有的JavaScript字符串方法。


// 完成下面程序，将`name`变量中的字母全部转为为大写，输出：`'HELLO'`。
var name = 'hello';
// TODO write your code here...
var name2 = name.toUpperCase();
console.log(name2);

// 完成下面程序，将sentence变量中的所有单词首字母变为大写，输出：'Good Afternoon, Mr Mike.'。
var sentence = 'good afternoon, mr mike.';
//TODO write your code here...
    <script>
        function myFunction(sentence) {
            var array = sentence.toLowerCase().split(" ");
            var newstr;
            for (var i = 0; i < array.length; i++) {
                array[i] = array[i].substring(0, 1).toUpperCase() + array[i].substring(1, array.length);
            }
            var newstr = array.join(" ");
            document.getElementById("demo").innerHTML = newstr;
        }

    </script>

// 完成下面程序，将money变量中的金额提取出来，输出：20。
var money = '￥20';
//TODO write your code here...
<script>
var money = '￥20';
var value = money.replace(/[^0-9]/ig,""); 
alert(value);
</script>
