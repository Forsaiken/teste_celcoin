export const boards = [
    {
        icon: 'bi:person',
        iconColor: '#0057FF',
        value: 26,
        gain: 30,
        label: 'Pacientes ativos',
        subInfo: {
            label: "Pacientes totais",
            value: 268
        }
    },
    {
        icon: 'bx:test-tube',
        iconColor: '#0057FF',
        subIcon: 'ant-design:check-outlined',
        value: 30,
        gain: -10,
        label: 'Testes realizados',
        subInfo: {
            label: "Testes totais",
            value: 1265
        }
    },
    {
        icon: 'bx:test-tube',
        iconColor: '#1CBF84',
        value: 26,
        gain: 30,
        label: 'Testes concluídos',
        subInfo: {
            label: "Testes concluidos concluídos",
            value: 268
        }
    },
    {
        icon: 'bx:test-tube',
        iconColor: '#EF0C35',
        subIcon: 'carbon:close',
        value: 11,
        gain: -3,
        label: 'Testes cancelados',
        subInfo: {
            label: "Testes totais cancelados",
            value: 618
        }
    },

]