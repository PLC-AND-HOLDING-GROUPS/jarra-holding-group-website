const { ImportExportOverview, ImportExportCategory, ImportExportStep } = require('../../models');

const getOverview = async (req, res) => {
    try {
        let overview = await ImportExportOverview.findOne();
        if (!overview) {
            overview = await ImportExportOverview.create({
                page_subtitle: 'IMPORT & EXPORT',
                page_title: 'Connecting Ethiopia to Global Markets',
                page_description: 'Jarra Holdings facilitates the movement of agricultural commodities, industrial inputs, construction materials, machinery, vehicles, electrical equipment, and other goods between markets. Our import and export activities are built around market demand, reliable sourcing, and the delivery of value to customers and stakeholders.',
                export_title: 'Taking Ethiopian Commodities to Global Markets',
                export_description: 'Jarra Holdings exports Ethiopian agricultural commodities, connecting locally sourced products with international markets.',
                import_title: 'Sourcing Essential Goods for Growing Markets',
                import_description: 'Jarra Holdings imports agricultural, construction, industrial, automotive, and electrical goods to respond to market needs across Ethiopia.',
                center_icon: 'Globe2',
                center_title: 'JARRA\nHOLDINGS',
                center_subtitle: 'GLOBAL TRADE',
                stat1_value: '$5M+',
                stat1_label: 'Export Performance',
                stat1_subtext: 'Including 500 MT of Coffee Volume',
                stat2_value: '$20M+',
                stat2_label: 'Annual Import Value',
                cta_title: 'Explore Our Trading Capabilities',
                cta_description: 'Discover the infrastructure and trading activities that support the movement of goods across our business operations.',
                cta_button_title: 'Explore Warehousing & Trading',
                cta_button_url: '#warehousing-trading',
                cta_button_icon: 'ArrowRight'
            });
        }
        res.json(overview);
    } catch (error) {
        console.error('Error fetching import export overview:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateOverview = async (req, res) => {
    try {
        let overview = await ImportExportOverview.findOne();
        if (overview) {
            await overview.update(req.body);
        } else {
            overview = await ImportExportOverview.create(req.body);
        }
        res.json(overview);
    } catch (error) {
        console.error('Error updating import export overview:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Categories
const getCategories = async (req, res) => {
    try {
        const type = req.query.type;
        const whereClause = type ? { type } : {};
        const categories = await ImportExportCategory.findAll({
            where: whereClause,
            order: [['order', 'ASC'], ['created_at', 'ASC']]
        });
        res.json(categories);
    } catch (error) {
        console.error('Error fetching categories:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createCategory = async (req, res) => {
    try {
        const category = await ImportExportCategory.create(req.body);
        res.status(201).json(category);
    } catch (error) {
        console.error('Error creating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await ImportExportCategory.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        
        await category.update(req.body);
        res.json(category);
    } catch (error) {
        console.error('Error updating category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params;
        const category = await ImportExportCategory.findByPk(id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        
        await category.destroy();
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        console.error('Error deleting category:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

// Steps
const getSteps = async (req, res) => {
    try {
        const steps = await ImportExportStep.findAll({
            order: [['order', 'ASC'], ['created_at', 'ASC']]
        });
        res.json(steps);
    } catch (error) {
        console.error('Error fetching steps:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const createStep = async (req, res) => {
    try {
        const step = await ImportExportStep.create(req.body);
        res.status(201).json(step);
    } catch (error) {
        console.error('Error creating step:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const updateStep = async (req, res) => {
    try {
        const { id } = req.params;
        const step = await ImportExportStep.findByPk(id);
        if (!step) return res.status(404).json({ message: 'Step not found' });
        
        await step.update(req.body);
        res.json(step);
    } catch (error) {
        console.error('Error updating step:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

const deleteStep = async (req, res) => {
    try {
        const { id } = req.params;
        const step = await ImportExportStep.findByPk(id);
        if (!step) return res.status(404).json({ message: 'Step not found' });
        
        await step.destroy();
        res.json({ message: 'Step deleted successfully' });
    } catch (error) {
        console.error('Error deleting step:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
};

module.exports = {
    getOverview,
    updateOverview,
    getCategories,
    createCategory,
    updateCategory,
    deleteCategory,
    getSteps,
    createStep,
    updateStep,
    deleteStep
};
