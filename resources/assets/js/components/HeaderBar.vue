<template>
	<div>
		<ul class="sidenav" id="slide-out">
			<li v-if="isAuthenticated">
				<div class="user-view">
					<div class="background">
						<img src="/img/menu-bg.jpg" style="width: 100%;">
					</div>
					<div class="circle pink lighten-2 white-text" id="user-cion">
						<span id="user-icon-initial">{{ this.$store.getters.getUser.name.slice(0, 1).toUpperCase() }}</span>
					</div>
					<span class="white-text name">{{ this.$store.getters.getUser.name }}</span>
					<span class="white-text email">{{ this.$store.getters.getUser.email }}</span>
				</div>
			</li>
			<li><router-link class="sidenav-close" to="/about"><i class="material-icons">announcement</i>About</router-link></li>
			<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/schedule"><i class="material-icons">event</i>講義日程</router-link></li>
			<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/attendance"><i class="material-icons">save</i>出欠記録</router-link></li>
			<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/option"><i class="material-icons">build</i>設定</router-link></li>
			<li class="divider"></li>
			<li v-if="isAuthenticated"><a class="sidenav-close" @click="logout()" id="logout">ログアウト</a></li>
			<li v-if="! isAuthenticated"><router-link class="sidenav-close" to="/login">ログイン</router-link></li>
			<li v-if="! isAuthenticated"><router-link class="sidenav-close" to="/register">ユーザー登録</router-link></li>

		</ul>
		<header class="navbar-fixed">
			<nav>
				<div class="nav-wrapper light-blue">
					<div class="hide-on-med-and-down left">
						<router-link to="/" class="breadcrumb">Twicla</router-link>
						<router-link v-if="this.$route.path !== '/'" :to="this.$route.path" class="breadcrumb">{{ this.$route.name }}</router-link>
					</div>
					<router-link :to="this.$route.path" class="hide-on-large-only" style="font-size: 1.3em;">{{ this.$route.name }}</router-link>
					<a v-if="this.$route.path === '/' || ! isAuthenticated" href="#" data-target="slide-out" class="sidenav-trigger"><i class="material-icons">menu</i></a>
					<router-link v-else to="/" id="back-trigger" class="hide-on-large-only"><i class="material-icons">arrow_back</i></router-link>
					<ul class="right hide-on-med-and-down">
						<li><router-link class="sidenav-close" to="/about">About</router-link></li>
						<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/schedule">講義日程</router-link></li>
						<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/attendance">出欠記録</router-link></li>
						<li v-if="isAuthenticated"><router-link class="sidenav-close" to="/option">設定</router-link></li>
						<li v-if="isAuthenticated"><a class="sidenav-close" @click="logout()">ログアウト</a></li>
						<li v-if="! isAuthenticated"><router-link class="sidenav-close" to="/login">ログイン</router-link></li>
						<li v-if="! isAuthenticated"><router-link class="sidenav-close" to="/register">ユーザー登録</router-link></li>
					</ul>
				</div>
			</nav>
		</header>
	</div>
</template>
<script>
	export default {
		mounted() {
			let el = document.querySelector('.sidenav');
			let instance = M.Sidenav.init(el, {});
		},

		computed: {
			isAuthenticated() {
				return this.$store.getters.isAuthenticated
			}
		},

		methods: {
			logout() {
				this.$store.dispatch('logout').then(() => {
					this.$router.push('/login')
					M.toast({html: 'ログアウトしました', classes: 'teal white-text'})
				}).catch(() => {
					M.toast({html: 'ログアウトに失敗しました', classes: 'red white-text'})
				})
			},
		},
	}
</script>
<style scoped>
	#user-icon-initial {
		display: block;
		text-align: center;
		font-size: 2.0em;
		line-height: 60px;
		width: 100%;
		height: 100%;
	}
	#logout {
		cursor: pointer;
	}
	#back-trigger {
		float: left;
		position: relative;
		z-index: 1;
		height: 56px;
		margin: 0 18px;
	}
	#back-trigger i {
		height: 56px;
		line-height: 56px;
	}
	@media only screen and (min-width: 601px) {
		#back-trigger, #back-trigger i {
			height: 64px;
			line-height: 64px;
		}
	}
</style>