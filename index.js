import Vue from 'vue';

import $ from 'jquery';
import '@progress/kendo-ui';
import { DataSource, HierarchicalDataSource, GanttDataSource, GanttDependencyDataSource, PivotDataSource, SchedulerDataSource, TreeListDataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper';
import { Gantt, GanttColumn, GanttView, GanttInstaller, } from '@progress/kendo-gantt-vue-wrapper';
import JSZip from 'jszip';

Vue.use(DataSourceInstaller);
Vue.use(GanttInstaller);

new Vue({
    el: '#vueapp',
    data: {
        fields: {
            id: { from: 'ID', type: 'number' },
            orderId: { from: 'OrderID', type: 'number', validation: { required: true } },
            parentId: { from: 'ParentID', type: 'number', defaultValue: null, validation: { required: true } },
            start: { from: 'Start', type: 'date' },
            end: { from: 'End', type: 'date' },
            title: { from: 'Title', defaultValue: '', type: 'string' },
            percentComplete: { from: 'PercentComplete', type: 'number' },
            summary: { from: 'Summary', type: 'boolean' },
            expanded: { from: 'Expanded', type: 'boolean', defaultValue: true }
        }
    },
    methods: {
        parameterMap: function (options, operation) {
            if (operation !== 'read') {
                return {models: kendo.stringify(options.models || [options])}
            }
        }
    }
})
