<template>
  <div class="py-12">
    <ContentHeading
      heading="User Information"
      subtitle="Contain your CV data"
    />
    <div class="mt-6 border-t border-gray-100">
      <dl class="divide-y divide-gray-100">
        <UserDetailsRow
          title="Personal info"
          text-content="Damir Kamaletdinov, 1.04.1986, Kaliningrad"
        />
        <UserDetailsRow title="Working experience" text-content="12 years" />
        <UserDetailsRow title="Projects done" text-content="30+" />
        <UserDetailsRow
          title="Technology stack"
          text-content="JS, TS, Vue, Nuxt, PHP, SQL, K8s, Docker"
        />
      </dl>
    </div>
  </div>
</template>
