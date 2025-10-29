import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { Activity, AlertTriangle, CheckCircle, Clock } from 'lucide-react';

const Demo = () => {
  // Sample data for charts
  const delayTrends = [
    { time: '6 AM', delays: 5 },
    { time: '9 AM', delays: 15 },
    { time: '12 PM', delays: 25 },
    { time: '3 PM', delays: 30 },
    { time: '6 PM', delays: 40 },
    { time: '9 PM', delays: 20 },
  ];

  const causeData = [
    { cause: 'Weather', count: 45 },
    { cause: 'Traffic', count: 30 },
    { cause: 'Maintenance', count: 15 },
    { cause: 'Crew', count: 10 },
  ];

  const riskData = [
    { name: 'Low Risk', value: 60, color: 'hsl(var(--accent))' },
    { name: 'Medium Risk', value: 25, color: 'hsl(var(--secondary))' },
    { name: 'High Risk', value: 15, color: 'hsl(var(--destructive))' },
  ];

  const flights = [
    { id: 'AA-123', from: 'JFK', to: 'LAX', status: 'On Time', risk: 15, color: 'accent' },
    { id: 'DL-456', from: 'ORD', to: 'MIA', status: 'Delayed', risk: 75, color: 'destructive' },
    { id: 'UA-789', from: 'SFO', to: 'SEA', status: 'Warning', risk: 45, color: 'secondary' },
  ];

  return (
    <section id="demo" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Live Demo Dashboard
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Experience our prediction engine in action with real-time flight data analysis.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-12 animate-slide-up">
          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Active Flights
              </CardTitle>
              <Activity className="h-4 w-4 text-primary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">2,847</div>
              <p className="text-xs text-muted-foreground mt-1">+12% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Predicted Delays
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-destructive" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">142</div>
              <p className="text-xs text-muted-foreground mt-1">-8% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                On-Time Rate
              </CardTitle>
              <CheckCircle className="h-4 w-4 text-accent" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">94.5%</div>
              <p className="text-xs text-muted-foreground mt-1">+2.1% from yesterday</p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium text-muted-foreground">
                Avg Delay Time
              </CardTitle>
              <Clock className="h-4 w-4 text-secondary" />
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-foreground">18 min</div>
              <p className="text-xs text-muted-foreground mt-1">-5 min from yesterday</p>
            </CardContent>
          </Card>
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-border animate-slide-up" style={{ animationDelay: '0.1s' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Delay Trends Today</CardTitle>
              <CardDescription>Number of delays throughout the day</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={delayTrends}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="time" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Line
                    type="monotone"
                    dataKey="delays"
                    stroke="hsl(var(--primary))"
                    strokeWidth={3}
                    dot={{ fill: 'hsl(var(--primary))' }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="border-border animate-slide-up" style={{ animationDelay: '0.2s' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Delay Causes</CardTitle>
              <CardDescription>Primary reasons for flight delays</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={causeData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="hsl(var(--border))" />
                  <XAxis dataKey="cause" stroke="hsl(var(--muted-foreground))" />
                  <YAxis stroke="hsl(var(--muted-foreground))" />
                  <Tooltip
                    contentStyle={{
                      backgroundColor: 'hsl(var(--card))',
                      border: '1px solid hsl(var(--border))',
                      borderRadius: '8px',
                    }}
                  />
                  <Bar dataKey="count" fill="hsl(var(--secondary))" radius={[8, 8, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="border-border animate-slide-up" style={{ animationDelay: '0.3s' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Risk Distribution</CardTitle>
              <CardDescription>Flights by delay risk level</CardDescription>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={riskData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {riskData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>

          <Card className="md:col-span-2 border-border animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <CardHeader>
              <CardTitle className="text-foreground">Sample Flight Predictions</CardTitle>
              <CardDescription>Real-time delay probability analysis</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {flights.map((flight) => (
                  <div
                    key={flight.id}
                    className="flex items-center justify-between p-4 rounded-lg border border-border hover:border-primary/50 transition-all"
                  >
                    <div className="flex items-center gap-4">
                      <div className="text-left">
                        <div className="font-semibold text-foreground">{flight.id}</div>
                        <div className="text-sm text-muted-foreground">
                          {flight.from} → {flight.to}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="font-medium text-foreground">{flight.status}</div>
                        <div className="text-sm text-muted-foreground">Delay Risk: {flight.risk}%</div>
                      </div>
                      <div className="w-24 h-2 bg-muted rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-${flight.color} transition-all`}
                          style={{ width: `${flight.risk}%` }}
                        />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Demo;
