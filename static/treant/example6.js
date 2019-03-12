var tree_structure = {
    chart: {
        container: "#OrganiseChart6",
        levelSeparation:    25,
        siblingSeparation:  70,
        subTeeSeparation:   70,
        nodeAlign: "BOTTOM",
        scrollbar: "fancy",
        padding: 35,
        node: { HTMLclass: "evolution-tree" },
        connectors: {
            type: "curve",
            style: {
                "stroke-width": 2,
                "stroke-linecap": "round",
                "stroke": "#ccc"
            }
        }
    },

    nodeStructure: {
        text: { name: "You" },
        children: [
            {
                text: { name: "Namneet" },
            },
            {
                text: { name: "Navdeep" },
                children: [
                            {
                                text: { name: "Vivek" }
                            },
                            {
                                text: { name: "shiv" },
                                children: [
                            {
                                text: { name: "Rahul" }
                            }
                            ]
                            }
            ]
            },
            {
                text: {name: "rahul"},
                children: [
                    {
                        text: { name: "fatima" }
                    },
                    {
                        text: { name: "yogesh" }
                    
                    }
                ]
            }
        ]
    }
};