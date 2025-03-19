import { TurmaType } from '@/types/TurmaType'
import styles from './styles'
import { Touchable, TouchableOpacity, ViewStyle } from 'react-native';
import Title from '../../text/Title/Title';

type TurmItemProps={
    turma:TurmaType;
    style?:ViewStyle;
    onPress?:()=>void;
};

export function TurmaItem(
    {
        turma,
        style,
        onPress
    }:TurmItemProps
){
    <TouchableOpacity
        style={[styles.itemContainer, style]}
        onPress={onPress}
        >
        <Title style={styles.itemText}>
            {turma.name}
        </Title>
    </TouchableOpacity>
}