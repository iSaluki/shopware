import template from './sw-settings-rule-tree-item.html.twig';

const { Component } = Shopware;

Component.extend('sw-settings-rule-tree-item', 'sw-tree-item', {
    template,

    props: {
        association: {
            type: String,
            required: true,
        },
    },

    methods: {
        hasItemAssociation(item) {
            if (
                (item.data[this.association] && item.data[this.association].length > 0)
                || (item.data.extensions[this.association] && item.data.extensions[this.association].length > 0)
            ) {
                return true;
            }

            return false;
        },
    },
});
