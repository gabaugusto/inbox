import { helper } from "@ember/component/helper";

export function routeName([value]) {
    return value[0].toUpperCase() + value.slice(1);
}

export default helper(routeName);
