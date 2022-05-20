import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import DashboardPage from './views/DashboardPage'
import PacientesPage from './views/PacientesPage'
import { Layout } from './components';

const App = React.memo(() => {

	return (
		<BrowserRouter>
			<Layout>
				<Routes>
					<Route exact path="/" element={
						// <CustomRoute admin>
							<DashboardPage />
						// </CustomRoute>
					} />
					<Route exact path="/pacientes" element={
						// <CustomRoute admin>
							<PacientesPage />
						// </CustomRoute>
					} />
					{/* <Route path="/login" index element={<SignIn />} /> */}
				</Routes>
			</Layout>
		</BrowserRouter>
	)

})

export default App;
