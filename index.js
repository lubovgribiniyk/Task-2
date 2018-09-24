import User from "./user";
import { show } from "./show";

const user = new User("Liubov", "Gribiniuk");

show(user.getFullName());
