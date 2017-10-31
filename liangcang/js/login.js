$("#username").val("请输入用户名")
$("#pass").val("请输入密码")
var a = 0
var b = 0

var aChecked = document.getElementById("check")
$(document).ready(function() {
	// (1) 先获取cookie中用户名和密码值
	var u = $.cookie("u");
	var p = $.cookie("p");
	
	// (2) 如何判断有没有 cookie
	//         有： 登陆
	//         没有:  不登陆
	
	if (p != undefined && u != undefined) {
		$("#username").val(u); // 放到 input 中
		$("#pass").val(p); // 放到 input 中
		$("#pass").attr("type","password")
		aChecked.checked = "checked"
		a=1
		b=1
		
		// 再发  ajax 向服务器发送登陆请求
		
	}
})

$("#username").focus(function(){
	if( $(this).val() == "请输入用户名"){
		$(this).val("")
	}
})
$("#username").blur(function(){
	if( $(this).val() == ""){
		$(this).val("请输入用户名")
		a = 0
	}else{
		a = 1 
	}
})

$("#pass").focus(function(){
	if($(this).val() == "请输入密码"){
		$(this).val("")
		$(this).attr("type","password")
	}
})

$("#pass").blur(function(){
	if($(this).val() == ""){
		$(this).attr("type","text")
		$(this).val("请输入密码")
		b=0
	}else{
		b=1
		
	}
})

$("#login").click(function(){
	if(a == 1){
		if (b == 1) {
			var u = $("#username").val()
			var p = $("#pass").val()
			if($("#check").is(":checked")){
				
				$.cookie("u", u, {expires: 7});
				$.cookie("p", p, {expires: 7});

			}
			var url = "http://h6.duchengjiu.top/shop/api_user.php"
			var data = {
				"status":"login",
				"username":u,
				"password":p
			}
			$.post(url,data,function(obj){
				console.log(obj)
				if(obj.code == 0){
					alert("登录成功")
				}else if (obj.code == 2002){
					alert("用户名不存在")
				}else if(obj.code == 1001){
					alert("密码错误")
				}
			})
		} else{
			alert("请输入密码")
		}
	}else{
		alert("请输入用户名")
	}
})


