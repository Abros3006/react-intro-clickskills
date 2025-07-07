import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

export default [
  layout("./layouts/layout.tsx", [
    index("routes/home.tsx"),

    // Module 1
    route("module-1/introduction", "./modules/module-1/introduction.tsx"),
    route("module-1/setup", "./modules/module-1/setup.tsx"),
    route("module-1/v-dom", "./modules/module-1/v-dom.tsx"),

    // Module 2
    route("module-2/eslint", "./modules/module-2/eslint.tsx"),
    route("module-2/git", "./modules/module-2/git.tsx"),
    route("module-2/nomenclature", "./modules/module-2/nomenclature.tsx"),
    route("module-2/tools", "./modules/module-2/tools.tsx"),

    // Module 3
    route("module-3/components", "./modules/module-3/components.tsx"),
    route("module-3/functions", "./modules/module-3/functions.tsx"),
    route("module-3/props", "./modules/module-3/props.tsx"),

    // Module 4
    route("module-4/event-handling", "./modules/module-4/event-handling.tsx"),
    route("module-4/hooks", "./modules/module-4/hooks.tsx"),
    route("module-4/inputs", "./modules/module-4/inputs.tsx"),

    // Module 5
    route("module-5/context", "./modules/module-5/context.tsx"),
    route("module-5/custom-hooks", "./modules/module-5/custom-hooks.tsx"),
    route("module-5/effects", "./modules/module-5/effects.tsx"),

    // Module 6
    route("module-6/functions", "./modules/module-6/functions.tsx"),
    route("module-6/list", "./modules/module-6/list.tsx"),
    route("module-6/tanstack", "./modules/module-6/tanstack.tsx"),

    // Module 7
    route("module-7/forms", "./modules/module-7/forms.tsx"),
    route("module-7/routing", "./modules/module-7/routing.tsx"),
  ]),
] satisfies RouteConfig;
