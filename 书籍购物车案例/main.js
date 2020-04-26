const app=new Vue({
	el:'#app',
	data:{
		books:[{
			id:1,
			name:'《算法导论》',
			data:'2006-9',
			price:85.00,
			count:1
		},{
			id:2,
			name:'《unix编程艺术》',
			data:'2006-2',
			price:50.00,
			count:1
		},{
			id:3,
			name:'《编程珠玑》',
			data:'2005-10',
			price:39.00,
			count:1
		},{
			id:4,
			name:'《代码大全》',
			data:'2006-3',
			price:120.00,
			count:1
		}],
	},
	methods:{
		increment(item){
			item.count++;
		},
		decrement(item){
			item.count--;
			
		},
		btnC(item)
		{return item.count<=1;},
		removeItem(index){
			this.books.splice(index,1);
		},
	},
	computed:{
		totalPrice(){
			
			let totalprice=0;
			//1、普通for循环计算总价
			/* for(let i=0;i<this.books.length;i++){
				totalprice+=this.books[i].price*this.books[i].count;
			} */
			//2、for(let i in this.books)
			/* for(let i in this.books){
				//console.log(i);//i是索引
				totalprice+=this.books[i].price*this.books[i].count
			} */
			//3、
			/* for(let i of this.books){
				totalprice+=i.price*i.count;
				} */
				
			//4、reduce
			/* totalprice= this.books.reduce(function(pre,book){
				return pre+book.price*book.count;
			},0) */
			totalprice=this.books.reduce((pre,book)=> pre+book.price*book.count,0);
			
			return totalprice;
		}
	},
	filters:{
		showPrice(price){
			return '￥'+price.toFixed(2);
		}
	}
})
