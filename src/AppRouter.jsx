import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Template from "./Template";
import App from "./App";
import Edit from "./Edit";
export default function AppRouter() {
	const [list, setList] = useState([
		{ _id: 1, subject: "Apple", done: false },
		{ _id: 2, subject: "Orange", done: true },
		{ _id: 3, subject: "Banana", done: false }
	]);

	const add = subject => {
		const _id = list[list.length - 1]._id + 1;
		setList([...list, { _id: _id, subject: subject }]);
	};

	const remove = _id => {
		setList(list.filter(item => item._id !== _id));
	};

	const toggle = _id => {
		setList(
			list.map(item => {
				if (item._id === _id) item.done = !item.done;
				return item;
			})
		);
	};

	const clear = () => {
		setList(list.filter(item => !item.done));
	};

	const update = (_id, subject) => {
		if (!subject) return false;
		setList(
			list.map(item => {
				if (item._id === _id) item.subject = subject;
				return item;
			})
		);
	};
	const router = createBrowserRouter([
		{
			path: "/",
			element: <Template list={list} clear={clear} />,
			children: [
				{
					path: "/",
					element: (
						<App
							list={list}
							add={add}
							remove={remove}
							toggle={toggle}
						/>
					)
				},
				{
					path: "/edit",
					element: <Edit update={update} />
				}
			]
		}
	]);
	return <RouterProvider router={router} />;
}
