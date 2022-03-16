import React, { useState, useEffect } from 'react';
import bridge from '@vkontakte/vk-bridge';
import { View, ScreenSpinner, AdaptivityProvider, AppRoot } from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Zhesar from './panels/zhesar';
import Aes from './panels/aes';


const App = () => {
	const [activePanel, setActivePanel] = useState('home');
	
	const [popout, setPopout] = useState(null);

	
	const go = e => {
		setActivePanel(e);
	};

	return (
		<AdaptivityProvider>
			<AppRoot>
				<View activePanel={activePanel} popout={popout}>
					<Home id='home'  go={go} />
					<Zhesar id={'zhesar'} go={go}></Zhesar>
					<Aes id='aes' go={go}></Aes>
				</View>
			</AppRoot>
		</AdaptivityProvider>
	);
}

export default App;
