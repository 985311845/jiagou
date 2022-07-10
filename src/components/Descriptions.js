export default {
    props: {
        column: {
            type: Number,
            defaul: 3
        },
        dataList: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        console.log(this.column)
    },
    render(h) {
        return (<el-descriptions class="margin-top" column={this.column} title="带边框列表" border>
            <template slot="extra">
                <el-button type="primary" size="small">操作</el-button>
            </template>
            {
                this.dataList.map((item, index) => {
                    return <el-descriptions-item label={item.label} key={index}>{item.value}</el-descriptions-item>
                })
            }

        </el-descriptions>)
    }
}