import {useState} from "react";
import {Dropdown} from 'react-native-element-dropdown';

const DropdownComponent = (props) => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false)
    let data, title
    if (props.data_dropdown === "kategori_toko") {
        data = [
            {label: 'Toko Kelontong', value: '1'},
            {label: 'Landry', value: '2'},
            {label: 'Coffee Shop', value: '3'},
            {label: 'Jasa/Service', value: '4'},
            {label: 'Pedagang Kaki 5', value: '5'},
            {label: 'Makanan', value: '6'},
            {label: 'Minuman', value: '7'},
            {label: 'Gaming', value: '8'},
            {label: 'Toko Baju', value: '8'},
            {label: 'Cafe', value: '8'},
            {label: 'Restauran', value: '8'},
        ];
        title = "Kategori Toko"
    } else if (props.data_dropdown === "provinsi") {
        data = [
            {label: 'Jawa Barat', value: '1'},
            {label: 'Jawa Tengah', value: '1'},
        ];
        title = "Provinsi"
    } else if (props.data_dropdown === "kabkot") {
        data = [
            {label: 'Kabupaten Bekasi', value: '1'},
            {label: 'Kota Bekasi', value: '1'},
        ];
        title = "Kabupaten/Kota"
    } else {
        data = [
            {label: 'Cikarang Selatan', value: '1'},
            {label: 'Cibarusah', value: '1'},
        ];
        title = "Kecamatan"
    }

    return (
        <Dropdown
            fontFamily={"PoppinsRegular"}
            mode={"modal"}
            data={data}
            search
            containerStyle={{borderColor: "orange", borderWidth: 2, borderRadius: 5}}
            maxHeight={500}
            labelField="label"
            valueField="value"
            placeholder={!isFocus ? title : '...'}
            searchPlaceholder="Cari..."
            value={value}
            onFocus={() => setIsFocus(true)}
            onBlur={() => setIsFocus(false)}
            onChange={item => {
                setValue(item.value);
                setIsFocus(false);
            }}
        />
    );
}

export default DropdownComponent;
