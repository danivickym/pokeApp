function SearchBar() {
	return (
		<div className="relative mt-12 mb-10 w-[100%] rounded-md">
			<div className="absolute inset-y-0 left-0 flex items-center pl-3">
				<span className="text-gray-500 sm:text-sm">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="1"
							d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
						/>
					</svg>
				</span>
			</div>
			<input
				type="text"
				name="search"
				id="search"
				placeholder="Name or number"
				className="input-bordered input w-[83%] pl-10 lg:w-96"
			/>
			<div className="dropdown right-0">
				<label
					tabIndex={0}
					className="btn-ghost btn-circle btn ml-2 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						className="h-5 w-5"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M4 6h16M4 12h16M4 18h7"
						/>
					</svg>
				</label>
				<ul
					tabIndex={0}
					className="dropdown-content menu rounded-box menu-compact right-0 mt-3 w-40 justify-center bg-base-100 p-2 shadow lg:left-0">
					<li>
						<a>Sort by name</a>
					</li>
				</ul>
			</div>
		</div>
	);
}

export default SearchBar;
