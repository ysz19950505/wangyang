 $.idcode.setCode();
 
$("#phone").val("请输入手机号")
$("#Txtidcode").val("输入验证码，区分大小写")
$("#pass").val("6－20位字符组成，区分大小写")
$("#pass-f").val("确认密码")

var reg1 = /^1\d{10}$/
var a = 0
var b = 0
var c = 0
var d = 0



$("#phone").focus(function(){
	if($(this).val()=="请输入手机号"){
		$(this).val("")
	}
})
$("#phone").blur(function(){
	if ($(this).val()=="") {
		$(this).val("请输入手机号")
	}else{
		if( reg1.test($(this).val()) ){
				a = 1	
		}else{
			a = 0
			$(this).val("请输入正确的手机号")
		}
	}
})

$("#Txtidcode").focus(function(){
	if($(this).val()=="输入验证码，区分大小写"){
		$(this).val("")
	}
})

  $("#Txtidcode").blur(function(){
        var IsBy = $.idcode.validateCode()  //调用返回值，返回值结果为true或者false
        if(IsBy){
           // alert("验证码输入正确")
            b = 1
        }else {
            alert("验证码输入错误，请重新输入")
            if($(this).val()==""){
            	$(this).val("输入验证码，区分大小写")
            }
            b=0
        }
})
 var aPass = document.getElementById("#pass")
$("#pass").focus(function(){
	if($(this).val() == "6－20位字符组成，区分大小写"){
		$(this).val("")
		$(this).attr("type","password")
	}
})

$("#pass").blur(function(){
	if($(this).val() == ""){
		$(this).attr("type","text")
		$(this).val("6－20位字符组成，区分大小写")
		c=0
	}else if($(this).val().length <6){
		c=0
		alert("密码太短")
	}else{
		c = 1
	}
})

$("#pass").keyup(function(){
	$(".pass span").css("background","#F5F5F5")
	
	var level = getLevel($(this).val())
	if(level == 0 || level == 1){
		$(".pass span").eq(0).css("background","red")
	}else if (level == 2){
		$(".pass span").eq(0).css("background","red")
		$(".pass span").eq(1).css("background","yellow")
	}else if (level == 3){
		$(".pass span").eq(0).css("background","red")
		$(".pass span").eq(1).css("background","yellow")
		$(".pass span").eq(2).css("background","#00d5e8")
	}
})


 function getLevel(txt) {
     var num = 0;
      //判断txt中是否有数字
     var reg = /\d+/;
      if (reg.test(txt)) {
         num++;
     }
     //是否包含字母
     var reg = /[a-z]+/i;
     if (reg.test(txt)) {
         num++;
     }
     //是否包含特殊符号
     var reg = /[^0-9a-zA-Z]+/;
     if (reg.test(txt)) {
         num++;
     }
     //如果密码长度小于6 强度-1
     if (txt.length < 6) {
         num--;
     }
     return num;
 }


$("#pass-f").focus(function(){
	if($(this).val() == "确认密码"){
		$(this).val("")
		$(this).attr("type","password")
	}
})




$("#pass-f").blur(function(){
	if($(this).val() == ""){
		$(this).attr("type","text")
		$(this).val("确认密码")
	}else{
		if($(this).val() == $("#pass").val() ){
			d=1
		}else{
			alert("密码不一致")
			d=0
		}
	}
})

$("#login").click(function(){
	if(a==1){
		if(b==1){
			if(c==1){
				if(d==1){
					if( $("#check").is(":checked") ){
						var a1 = $("#phone").val()
						var a2 = $("#pass").val()
						var url = "http://h6.duchengjiu.top/shop/api_user.php"
						var data = {
							"status":"register",
							"username":a1,
							"password":a2
						}
						$.post(url,data,function(obj){
							console.log(obj)
							if(obj.code == 2001){
								alert("用户名已存在")
								return
							}else{
								alert("注册成功")
							}
						})
					}else{
						alert("请勾选同意")
						return ;
					}
					
				
				}else{
					alert("密码不一致")
					return ;
				}
				
			}else{
				alert("密码格式不对")
				return ;
			}
		}else{
			alert("请输入正确的验证码")
			return ;
		}
	}else{
		alert("请输入正确的手机号")
		return ;
	}
})
