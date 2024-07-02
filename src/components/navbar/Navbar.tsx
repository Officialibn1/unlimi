import { Bell, ChevronDown, Dot, Search } from "lucide-react";
import logo from "../../assets/UNLIMILOGO.png";
import avatar from "../../assets/doctor-avatar.png";
import "./Navbar.css";

const Navbar = () => {
	return (
		<nav className=' w-full p-4 px-6 flex h-min items-center bg-white'>
			<div className='logo  w-[206px] h-[56px]'>
				<img
					src={logo}
					alt='UNLIMI LOGO'
				/>
				{/* <h1>UNLIMI</h1> */}
			</div>

			<div className='searchAndAvatarContainer  flex justify-between flex-1 ml-8'>
				<div className='searchContainer py-2 px-5 flex gap-3 w-80 rounded-lg items-center relative border'>
					<Search stroke='#595959' />
					<input
						type='search'
						name='search'
						id='search'
						placeholder='Search by patients...'
						className='flex-1 outline-none hover:outline-none focus:outline-none'
					/>
				</div>

				<div className='avatarAndNotificationContainer'>
					{/* BELL NOTIFICATION CONTAINER */}
					<div className='notification'>
						<Bell
							fill='#9B9FAB'
							stroke='#9B9FAB'
						/>

						<div className='dot '>
							<Dot
								fill='#FF3D3D'
								stroke='#FF3D3D'
								size={30}
							/>
						</div>
					</div>

					{/* USER AVATAR CONTAINER */}
					<div className='avatarContainer'>
						<div className='avatar'>
							<img
								src={avatar}
								alt='user Avatar'
							/>
						</div>

						<h1>Deko</h1>

						<ChevronDown stroke='#595959' />
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
