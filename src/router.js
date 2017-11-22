import Home from './components/homepage.vue'
import Index from './components/index.vue'
import Login from './components/login.vue'
import Register from './components/register.vue'
import Forget from './components/forget.vue'
import Live from './components/live.vue'
import Recommend from './components/recommend.vue'
import Ask from './components/ask.vue'
import Show from './components/show.vue'
import Draw from './components/draw.vue'
import City from './components/city.vue'
import Galleries from './components/galleries.vue'
import Auction from './components/auction.vue'
import Personal from './components/personal.vue'
import Detail from './components/detail.vue'
import Sketch from './components/sketch.vue'
import Gouache from './components/gouache.vue'
import Oil from './components/oil.vue'
import Water from './components/water.vue'
import Pen from './components/pen.vue'
import Speed from './components/speed.vue'
import Category from './components/category.vue'
import Lot from './components/lot.vue'
import Last from './components/last.vue'
import Query from './components/query.vue'
import Goods from './components/goods.vue'
import Cart from './components/cart.vue'

export default[
	{path:"/home/:type",component:Home},
	{path:'/index',component:Index},
	{path:'/login',component:Login},
	{path:'/register',component:Register},
	{path:'/forget',component:Forget},
	{path:'/live',component:Live},
	{path:'/recommend',component:Recommend},
	{path:'/ask',component:Ask},
	{path:'/show',component:Show},
	{path:'/draw',component:Draw},
	{path:'/sketch',component:Sketch},
	{path:'/gouache',component:Gouache},
	{path:'/oil',component:Oil},
	{path:'/water',component:Water},
	{path:'/pen',component:Pen},
	{path:'/speed',component:Speed},
	{path:'/city',component:City},
	{path:'/lot',component:Lot},
	{path:'/last',component:Last},
	{path:'/query',component:Query},
	{path:'/goods',component:Goods},
	{path:'/cart',component:Cart},
	{path:'/category',component:Category},
	{path:'/galleries',component:Galleries},
	{path:'/auction',component:Auction},
	{path:'/personal',component:Personal},
	{path:'/detail/:type',component:Detail},
	{path:'/',component:Index},
	{path:'*',component:Home}
]