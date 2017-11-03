
var a = 0 ;
var b = 0 ;
var c = 0 ;
var d = 0 ;
var oTel = document.getElementById("telphone")
oTel.onfocus = function (){
	this.value = "";
}
oTel.onblur = function (){
var objvalue = this.value;
	if(this.value == ""){
		this.value = "请输入手机号"
	}
var reg=/^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/;
	if(reg.test(objvalue)){
		a = 1
	   // return true
	    
	}else{
	    alert("请输入正确的手机号码")
	    a = 0
	    //return false
	}
}

$.idcode.setCode();
$("#change").click(function(){
	$.idcode.setCode();
})
$("#Txtidcode").focus(function(){
	if ($(this).val("输入验证码")) {
		$(this).val("")
	}
})
$("#Txtidcode").blur(function(){
	if ($(this).val() == ""){
		$(this).val("输入验证码")
	}
	
	var n = $.idcode.validateCode()
	
	
	if (n == true) {
		b = 1;
		//return 
	}else{
		console.log("请输入正确的验证码")
		//alert("请输入正确的验证码")
		//return false
		b = 0

	}
})


$("#ppd").focus(function(){
	$(this).val("")
	$(this).attr("type","password")
})
$("#ppd").blur(function(){
	if ($(this).val() == "") {
		$(this).attr("type","text")
		$(this).val("6-20位字符组成，区分大小写")
	}
	if ( $(this).val().length < 6 ) {
		alert("请输入正确的密码位数")
		c = 0;
	}
	else if ($(this).val().length > 21) {
		alert("请输入正确的密码位数")
		c = 0;
	}
	else{
		c = 1;
		//return true;
	}
	
})

$("#ppd").keyup(function(){
	var level = getLevel($(this).val())
	if(level == 0 || level == 1){
		$(".password_1 div").eq(0).css("background","red")
	}else if (level == 2){
		$(".password_1 div").eq(0).css("background","red")
		$(".password_1 div").eq(1).css("background","red")
	}else if (level == 3){
		$(".password_1 div").eq(0).css("background","red")
		$(".password_1 div").eq(1).css("background","red")
		$(".password_1 div").eq(2).css("background","red")
	}
})
 function getLevel(txt) {
 	var num = 0;
    var reg = /\d+/;
    if (reg.test(txt)) {
        num++;
    }
    var reg = /[a-z]+/i;
    if (reg.test(txt)) {
    	num++;
    }
    var reg = /[^0-9a-zA-Z]+/;
    if (reg.test(txt)) {
        num++;
    }
    return num;
}

$("#conf").focus(function(){
	$(this).val("")
	$(this).attr("type","password")
})

$("#conf").blur(function(){
	if ($(this).val() == "") {
		$(this).attr("type","text")
		$(this).val("确认密码")
	}
	if ($(this).val() == $("#ppd").val() ) {
		d = 1;
		//return true
	}
	else{
		alert("您的密码不一致")
		d = 0;
	}
})

//if ($("#checke").is(":checked")) {
//	return true
//}else{
//	alert("请勾选条款再进行注册")
//}
//
$("#regist").click(function(){
    if (a == 1 && b == 1 && c == 1 && d == 1) {
		if( $("#checke").is(":checked") ){
			var n = $("#telphone").val()
			var m = $("#ppd").val()
			var url = "http://h6.duchengjiu.top/shop/api_user.php"
			var data = {
				"status":"register",
				"username":n,
				"password":m
				}
				$.post(url,data,function(obj){
				console.log(obj)
				if(obj.code == 2001){
				    alert("用户名已存在")
					return
				}else{
					alert("注册成功")
					window.location.href = "http://127.0.0.1:8020/liangcang/denglu_01.html"
				}
			})	 
		}else{
			alert("请勾选条款再进行注册")
		}
    }else{
    	alert("请输入正确的信息")
    }
})	
