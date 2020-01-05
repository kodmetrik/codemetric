import React, { PureComponent } from 'react'
import { Row,Col,Card} from 'antd'
import { Typography } from 'antd';
import {
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend, BarChart, Bar
} from 'recharts';

import Layout from '../../components/Layout'
const { Title } = Typography;
const data = [
  {
    pv: 2400,
  },
  {
    pv: 1398,
  },
  {
    pv: 9800,
  },
  {
    pv: 3908,
  },
  {
    pv: 4800,
  },
  {
    pv: 3800,
  },
  {
    name: 'Page G',pv: 4300, amt: 2100,
  },
];
const areaChartData = [
  {
    name: 'Page A', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Page B', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Page C', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Page D', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Page E', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Page F', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Page G', uv: 3490, pv: 4300, amt: 2100,
  },
];
const barChartData = [
  {
    name: 'Müşteri Sayısı', uv: 4000, pv: 2400, amt: 2400,
  },
  {
    name: 'Müşteri Sayısı', uv: 3000, pv: 1398, amt: 2210,
  },
  {
    name: 'Müşteri Sayısı', uv: 2000, pv: 9800, amt: 2290,
  },
  {
    name: 'Müşteri Sayısı', uv: 2780, pv: 3908, amt: 2000,
  },
  {
    name: 'Müşteri Sayısı', uv: 1890, pv: 4800, amt: 2181,
  },
  {
    name: 'Müşteri Sayısı', uv: 2390, pv: 3800, amt: 2500,
  },
  {
    name: 'Müşteri Sayısı', uv: 3490, pv: 4300, amt: 2100,
  },
];
class GraphsPage extends PureComponent {
  render() {
    return (
      <Layout>
        <Row gutter={[16]}>
          <Col span={16}>
            <Card>
              <Title level={4}>Son 6 aylık müşteri sayısı</Title>
              <Row type="flex" justify="center" style={{marginTop: 20}}>
                <BarChart
                  width={1200}
                  height={300}
                  data={barChartData}
                  margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="pv" fill="#8884d8" />
                </BarChart>
              </Row>
            </Card>
          </Col>
          <Col span={8}>
            <Row style={{ marginBottom: 20 }}>
              <Card>
                <Title level={4}>Geri dönüş yapılan müşteri sayısı</Title>
                <Row type="flex" justify="center">
                  <LineChart width={500} height={100} data={data}>
                    <Line type="monotone" dataKey="pv" stroke="#8884d8" strokeWidth={2} />
                  </LineChart>
                </Row>
              </Card>
            </Row>
            <Row >
              <Card>
                <Title level={4}>Son 6 ay abone artışı</Title>
                <Row type="flex" justify="center">
                  <AreaChart
                    width={500}
                    height={100}
                    data={areaChartData}
                    margin={{
                      top: 5, right: 0, left: 0, bottom: 5,
                    }}
                  >
                    <Area type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
                  </AreaChart>
                </Row>
              </Card>
            </Row>
          </Col>
        </Row>
      </Layout>
    )
  }
}
export default GraphsPage