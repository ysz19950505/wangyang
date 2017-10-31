


window.onload = function(){
	var a = $.cookie("a")
    var b =	$.cookie("b")
    console.log(a,b)
	$("#username").val(a)
	$("#code").val(b)
	$("#code").attr("type","password")
	$("#checkboxed").checked = "checked"
}
   

var n = 0;
var m = 0;
$("#username").focus(function(){
	if( $(this).val() == "输入手机号"){
		$(this).val("")
	}
})
$("#username").blur(function(){
	if( $(this).val() == ""){
		$(this).val("输入手机号")
		n = 0;
	}
	else{
		n = 1
	}
})


$("#code").focus(function(){
	if( $(this).val() == "输入密码"){
		$(this).val("")
		$(this).attr("type","password")
	}
})
$("#code").blur(function(){
	if( $(this).val() == ""){
		$(this).val("输入密码")
		$(this).attr("type","text")
		m = 0;
	}
	else{
		m = 1
	}
})
$("#denglu").click(function(){
	if (n == 1) {
		if (m == 1) {
			var a = $("#username").val();
			var b = $("#code").val();
			var url =  "http://h6.duchengjiu.top/shop/api_user.php"
			var data = {
				"status":"login",
				"username": a,
				"password": b
			}
			$.post(url, data, function(obj){
				console.log(obj)
				if (obj.code == 2002) {
					alert("用户名不存在")
				}
				else if (obj.code == 0) {
					alert("登录成功")
				}
				else if (obj.code == 1001) {
					alert("密码错误")
				}
			})
			if ($("#checkboxed").is(":checked")) {
				$.cookie("a", a, { expires: 7 })
			    $.cookie("b", b, { expires: 7 })
			}
		}else{
		    alert("请输入正确的密码")	
		}
	}else{
		alert("请输入正确的手机号")
	}
})
