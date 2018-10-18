var login = (function(){
    return {
        init: function(ele) {
            this.$ele = document.querySelector(ele);
            this.$loginBtn = this.$ele['login-btn'];
            console.log(this.$loginBtn);
            this.$usernameInp =   this.$ele['username'];
            this.$passwordInp =   this.$ele['password'];
            this.event();
        },
        event: function() {
            var _this = this;
            this.$loginBtn.onclick = function() {
                var params = {
                    method: 'post',
                    data: {
                        username: _this.$usernameInp.value,
                        password: _this.$passwordInp.value
                    },
                    success: function(data) {
                        data = JSON.parse(data);
                        _this.loginSuccess(data);
                    }
                }
                sendAjax('http://localhost:1025/businessWeb/php/login.php', params);
            }
        },
        loginSuccess: function(data) {
            if(data.code == 200) {
                document.cookie = "user-id=" + data.data.id;
                document.cookie = "token=" + data.data.token;
                localStorage.userImg = data.data.ataver;
                location.href = 'index.html';
            } else {
                alert(data.msg);
            }
        }
    }

}())
