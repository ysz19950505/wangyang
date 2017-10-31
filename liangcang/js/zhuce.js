
var oTel = document.getElementById("telphone")
oTel.onfocus = function (){
	this.value = "";
}
oTel.onblur = function (){
var objvalue = this.value;
if (this.value == "") {
	this.value = "请输入手机号"
}
var reg=/^(?:13\d|15\d|18[123456789])-?\d{5}(\d{3}|\*{3})$/;
	if(reg.test(objvalue)){
	    return true
	}else{
	    alert("请输入正确的手机号码")
	}
}

$.idcode.setCode();
var n = $.idcode.validateCode()
$("#change").click(function(){
	$.idcode.setCode();
})
$("#yzm").focus(function(){
	$(this).val("")
})
$("#yzm").blur(function(){
	if ($(this).val("")){
		$(this).val("输入验证码")
	}else{
		return true
	}
	var a = $(this).val();
	if (a == n) {
		return true
	}else{
		alert("请输入正确的验证码")
	}
})
