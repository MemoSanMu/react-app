#### 官方注释

##### [react-router-dom v6+](https://reactrouter.com/docs/en/v6/getting-started/installation)

```tsx
<Routes>
  <Route path="/" element={<App />}>
    <Route index element={<Home />} />
    <Route path="teams" element={<Teams />}>
      <Route path=":teamId" element={<Team />} />
      <Route path=":teamId/edit" element={<EditTeam />} />
      <Route path="new" element={<NewTeamForm />} />
      <Route index element={<LeagueStandings />} />
    </Route>
  </Route>
  <Route element={<PageLayout />}>
    <Route path="/privacy" element={<Privacy />} />
    <Route path="/tos" element={<Tos />} />
  </Route>
  <Route path="contact-us" element={<Contact />} />
</Routes>
```

> or

```tsx
let routes = [
  {
    element: <App />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'teams',
        element: <Teams />,
        children: [
          {
            index: true,
            element: <LeagueStandings />,
          },
          {
            path: ':teamId',
            element: <Team />,
          },
          {
            path: ':teamId/edit',
            element: <EditTeam />,
          },
          {
            path: 'new',
            element: <NewTeamForm />,
          },
        ],
      },
    ],
  },
  {
    element: <PageLayout />,
    children: [
      {
        element: <Privacy />,
        path: '/privacy',
      },
      {
        element: <Tos />,
        path: '/tos',
      },
    ],
  },
  {
    element: <Contact />,
    path: '/contact-us',
  },
];
```
