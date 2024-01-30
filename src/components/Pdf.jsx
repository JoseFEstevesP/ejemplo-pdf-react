/* eslint-disable react/prop-types */
// import { Document, Page, Text } from '@react-pdf/renderer';

// const Pdf = ({ data }) => {
// 	return (
// 		<Document>
// 			<Page size='A4'>
// 				<Text>
// 					{data?.map(item => (
// 						<Text key={item.id}>{item.title}</Text>
// 					))}
// 				</Text>
// 			</Page>
// 		</Document>
// 	);
// };
// export default Pdf;
import {
	Document,
	Image,
	Page,
	StyleSheet,
	Text,
	View,
} from '@react-pdf/renderer';
import icon from '../assets/logo.png';
const data = {
	user: 'José Esteves',
	date: '10/10/2022',
	report: 'Rol',
};
const head = [
	'head 01',
	'head 02',
	'head 03',
	'head 04',
	'head 05',
	'head 06',
	'head 07',
];
const body = [
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
	{
		item1: 'kjnwadjiojwaidjiadjoia',
		item2: 'item 02',
		item3: 'item 03',
		item4: 'kjnwadjiojwaidjiadjoia',
		item5: 'item 05',
		item6: 'item 06',
		item7: 'item 07',
	},
];
const Pdf = () => {
	const styles = StyleSheet.create({
		table: {
			display: 'table',
			width: '100%',
			borderStyle: 'solid',
			borderWidth: 1,
			borderRightWidth: 0,
			borderBottomWidth: 0,
		},
		tableRow: {
			width: '100%',
			margin: 'auto',
			flexDirection: 'row',
		},
		tableHeadRow: {
			width: '100%',
			margin: 'auto',
			flexDirection: 'row',
			backgroundColor: '#49ab84',
		},
		tableCol: {
			width: '100%',
			borderStyle: 'solid',
			borderWidth: 1,
			borderLeftWidth: 0,
			borderTopWidth: 0,
		},
		tableCell: {
			margin: 'auto',
			padding: '5px',
			fontSize: '10px',
		},
		body: {
			width: '100%',
			padding: '16px',
			overflow: 'scroll',
			pageBreakAfter: 'always',
		},
	});
	return (
		<Document>
			<Page style={styles.body}>
				<Image src={icon} />
				<Text
					style={{
						width: '60%',
						textAlign: 'center',
						fontSize: '12px',
						margin: '16px auto',
					}}
				>
					República bolivariana de Venezuela ministerio del poder popular para
					Relaciones interiores, justicia y paz Centro de comando, control y
					telecomunicaciones VEN 9-1-1
				</Text>
				<View style={{ marginBottom: '16px' }}>
					<View
						style={{
							width: '100%',
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'center',
							flexDirection: 'row',
						}}
					>
						<Text style={{ fontSize: '12px' }}>Reporte: {data.report}</Text>
						<Text style={{ fontSize: '12px' }}>Fecha: {data.date}</Text>
					</View>
					<Text style={{ fontSize: '12px' }}>
						Autor del reporte: {data.user}
					</Text>
				</View>
				<View style={styles.table}>
					<View style={styles.tableHeadRow}>
						{head?.map((item, index) => (
							<View key={index} style={styles.tableCol}>
								<Text style={styles.tableCell}>{item}</Text>
							</View>
						))}
					</View>
					{body?.map((item, index) => (
						<View key={index} style={styles.tableRow}>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item1}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item2}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item3}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item4}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item5}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item6}</Text>
							</View>
							<View style={styles.tableCol}>
								<Text style={styles.tableCell}>{item.item7}</Text>
							</View>
						</View>
					))}
				</View>
			</Page>
		</Document>
	);
};
export default Pdf;
