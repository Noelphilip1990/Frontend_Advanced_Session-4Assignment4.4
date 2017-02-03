//1.Example for Generic class and different type objects. 
console.log("Example 1..");
class GenericExample<T>
{
	private arg : T;
	
	public setName(arg:T)
	{
		this.arg = arg;
	}
	public getName():T
	{
		return this.arg;
	}
}
let g1 = new GenericExample<string>();
g1.setName("Noel");
console.log(g1.getName());

let g2 = new GenericExample<number>();
g2.setName(12345);
console.log(g2.getName());

console.log("===============================================================");
console.log("Example 2..");
//2. Interface Exmaple Generic Constraint.
interface IUser
{
	name: string;	
}
class User<T extends IUser>
{

	public getName(arg:T):T
	{
		return arg;
	}
}
let l = new User<IUser>();
console.log(l.getName({name:"Johnson"}));