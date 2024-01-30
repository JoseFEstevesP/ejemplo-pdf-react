import { PDFViewer } from '@react-pdf/renderer';
import './App.css';
import Pdf from './components/pdf';
function App() {
	return (
		<>
			<PDFViewer style={{ width: '100%', height: '99vh' }}>
				<Pdf />
			</PDFViewer>
		</>
	);
}

export default App;
