import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, Header, Button, Group, Cell, Div, Avatar, Banner } from '@vkontakte/vkui';

const Home = ({ id, go, }) => (
	<Panel id={id}>
		<PanelHeader>Дешифратор</PanelHeader>



		<Group header={<Header >Выберите тип шифра</Header>}>
			<Div>
				<Banner header="Шифр цезаря"
					subheader="Один из самых простых и наиболее широко известных методов шифрования"
					asideMode="expand"
					onClick={() => go('zhesar')}
				/>
				<Banner header="AES"
					subheader="Cимметричный алгоритм блочного шифрования"
					asideMode="expand"
					onClick={() => go('aes')}
				/>
			</Div>
		</Group>
	</Panel>
);



export default Home;
