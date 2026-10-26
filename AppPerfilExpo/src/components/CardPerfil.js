import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Linking }
    from 'react-native';
const CardPerfil = ({ nome, funcao, imagemUrl, email, telefone }) => {
    const tratarContato = (tipo, valor) => {

        const url = tipo === 'email' ? `mailto:${valor}` :
            `tel:${valor}`;
        Linking.openURL(url).catch((err) => console.error('Erro aoabrir link: ', err));
    };
    return (
        <View style={styles.cardContainer}>
            {/* Imagem do Perfil */}
            <Image
                source={{ uri: imagemUrl }}
                style={styles.avatar}
                resizeMode="cover"
            />
            {/* Bloco de Textos de Identificação */}
            <Text style={styles.nomeText}>{nome}</Text>
            <Text style={styles.funcaoText}>{funcao}</Text>
            {/* Linha Divisória */}
            <View style={styles.divisor} />
            {/* Botões de Ação e Contacto */}
            <View style={styles.contatoContainer}>
                <TouchableOpacity
                    style={styles.botaoContato}
                    onPress={() => tratarContato('email', email)}
                    activeOpacity={0.7}
                >
                    <Text style={styles.textoBotao}>E-mail: {email}</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.botaoContato, styles.botaoSecundario]}
                    onPress={() => tratarContato('tel', telefone)}
                    activeOpacity={0.7}
                >
                    <Text style={styles.textoBotao}>Ligar: {telefone}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 24,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4, // Sombra no Android
        width: '90%',
        maxWidth: 360,
    },

    avatar: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 16,
        borderWidth: 3,
        borderColor: '#0284C7',
    },
    nomeText: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#1E293B',
        marginBottom: 4,
    },
    funcaoText: {
        fontSize: 14,
        color: '#64748B',
        textTransform: 'uppercase',
        letterSpacing: 1,
    },
    divisor: {
        height: 1,
        backgroundColor: '#E2E8F0',
        width: '100%',
        marginVertical: 20,
    },
    contatoContainer: {
        width: '100%',
        gap: 10,
    },
    botaoContato: {
        backgroundColor: '#0284C7',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
    },
    botaoSecundario: {
        backgroundColor: '#0F172A',
    },
    textoBotao: {
        color: '#FFFFFF',
        fontSize: 14,
        fontWeight: '600',
    },
});
export default CardPerfil;