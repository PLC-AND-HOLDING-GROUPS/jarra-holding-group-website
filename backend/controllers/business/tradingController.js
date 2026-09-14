"use strict";
const { TradingOverview } = require("../../models");

const tradingController = {
    async getTradingOverview(req, res) {
        try {
            let overview = await TradingOverview.findOne();
            
            // If it doesn't exist, create a default one
            if (!overview) {
                overview = await TradingOverview.create({
                    hero_visual: {
                        center_title: 'JARRA',
                        center_subtitle: 'Holdings',
                        node_top: 'SUPPLIERS',
                        node_bottom: 'CUSTOMERS',
                        node_left: 'MARKETS',
                        node_right: 'OPPORTUNITIES'
                    },
                    principles: [
                        { number: '01', title: 'Understand', description: 'Recognize market needs and identify opportunities.' },
                        { number: '02', title: 'Connect', description: 'Bring suppliers, customers, and market opportunities together.' },
                        { number: '03', title: 'Respond', description: 'Act on demand through appropriate sourcing and commercial activity.' },
                        { number: '04', title: 'Create Value', description: 'Build lasting value for customers, stakeholders, and the wider business ecosystem.' }
                    ],
                    relationship_nodes: [
                        { id_name: 'supplier', label: 'SUPPLIER', desc: 'Reliable sourcing and commercial relationships', x: 50, y: 10 },
                        { id_name: 'jarra', label: 'JARRA HOLDINGS', desc: 'Connecting supply with demand', x: 50, y: 45, main: true },
                        { id_name: 'customer', label: 'CUSTOMERS', desc: 'Responding to real market needs', x: 20, y: 80 },
                        { id_name: 'market', label: 'MARKETS', desc: 'Understanding opportunities and demand', x: 80, y: 80 },
                        { id_name: 'value', label: 'VALUE', desc: 'Long-term commercial impact', x: 50, y: 110, highlight: true }
                    ],
                    market_gap: {
                        overline: 'OUR TRADING APPROACH',
                        title: 'Understanding the Market Before Moving the Market',
                        description: 'Trading begins with understanding. Jarra Holdings seeks to identify gaps, respond to market demand, connect reliable supply with opportunities, and build commercial relationships that create sustainable value.',
                        diagram_left_label: 'Supply',
                        diagram_right_label: 'Demand',
                        diagram_gap_label: 'MARKET GAP',
                        diagram_central_pill: 'JARRA HOLDINGS',
                        diagram_bottom_label: 'SUPPLY + DEMAND'
                    },
                    customer_connection: {
                        title: 'Closer to the Markets We Serve',
                        description: 'Our trading activities are ultimately driven by the needs of customers and end users. By connecting market opportunities with supply, Jarra Holdings works to ensure that its commercial activities create meaningful value beyond the transaction itself.',
                        note_text: 'Hover over the network nodes to explore relationships.'
                    },
                    big_statement: {
                        statement_words: ['MORE', 'than a', 'transaction.'],
                        description: 'Trading is not only about moving goods from one place to another. It is about understanding people, markets, opportunities, and timing—and creating relationships that support sustainable business growth.',
                        central_text: 'TRADE',
                        ecosystem_words: ['SUPPLY', 'DEMAND', 'RELATIONSHIPS', 'OPPORTUNITY', 'MARKET', 'VALUE']
                    },
                    stats: [
                        { value: '$5M+', label: 'Export Performance' },
                        { value: '$20M+', label: 'Annual Imported Goods' }
                    ],
                    trading_cycle: [
                        { label: 'MARKET', desc: 'Understand demand' },
                        { label: 'OPPORTUNITY', desc: 'Identify the gap' },
                        { label: 'CONNECTION', desc: 'Connect supply' },
                        { label: 'TRANSACTION', desc: 'Facilitate trade' },
                        { label: 'VALUE', desc: 'Create lasting impact' }
                    ]
                });
            }
            
            res.status(200).json(overview);
        } catch (error) {
            console.error('Error fetching trading overview:', error);
            res.status(500).json({ message: 'Server Error' });
        }
    },

    async updateTradingOverview(req, res) {
        try {
            let overview = await TradingOverview.findOne();
            
            if (!overview) {
                overview = await TradingOverview.create(req.body);
            } else {
                await overview.update(req.body);
            }
            
            res.status(200).json(overview);
        } catch (error) {
            console.error('Error updating trading overview:', error);
            res.status(500).json({ message: 'Server Error', error: error.message });
        }
    }
};

module.exports = tradingController;
