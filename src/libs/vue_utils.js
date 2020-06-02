var VueUtils = {}
//公共处理方法
VueUtils.install = function (Vue, option) {
	Vue.prototype.nowDateTime = function (type) {
		var date = new Date();
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		m = m < 10 ? ('0' + m) : m;
		var d = date.getDate();
		d = d < 10 ? ('0' + d) : d;
		var h = date.getHours();
		h = h < 10 ? ('0' + h) : h;
		var minute = date.getMinutes();
		var second = date.getSeconds();
		minute = minute < 10 ? ('0' + minute) : minute;
		second = second < 10 ? ('0' + second) : second;
		if(type=='date'){
			return y + '-' + m + '-' + d
		}
		if(type=='time'){
			return h + ':' + minute + ':' + second
		}
		if(type=='mm-dd'){
			return m+'-'+d
		}
		if(type=='hh:mm'){
			return h+':'+minute
		}
		return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
	}

	//页面跳转
	Vue.prototype.jump = function (pagename) {
		if (pagename == 'back') {
			this.$router.go(-1)
		} else {
			this.$router.push({ name: pagename })
		}
	},

	//页面权限验证
	Vue.prototype.authFalg = function(authCode) {
		if(!authCode) return true
		if(!sessionStorage.getItem('vuejs__auth')) return false
		let userAuths=JSON.parse(sessionStorage.getItem('vuejs__auth')).value
		if(userAuths){
			for (var i = 0; i < userAuths.length; i++) {
				if (userAuths[i].authCode === authCode) 
					return true
			}
		}
		return false
	}
	//高度计算
	Vue.prototype.residueHeight = function(ah) {
		let height = document.documentElement.clientHeight
		height-=70
		for(let i in ah){
			height-=ah[i]
		}
		return height
	}
}

export default VueUtils;