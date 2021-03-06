// Nova Asset JS

function parseRouteForDisplay(route) {
    return route.replace("\/", "").split("/").map(_.startCase).join(" > ")
}

function getResourceMeta(resourceName) {
    let resourceMeta = Nova.config.resources.filter(function(resource) {
        return resource.uriKey == resourceName
    })

    if (resourceMeta[0] != undefined)
        resourceMeta = resourceMeta[0]
    else
        resourceMeta = null

    return resourceMeta
}

let checkAndUpdateTitle_interval = null;
let checkAndUpdateTitle_interval_count = 0;

function checkAndUpdateTitle(originalTitle = null) {
    originalTitle = typeof originalTitle !== 'undefined' && !!originalTitle ? originalTitle : document.title;
    let titleUpdated = false;
    checkAndUpdateTitle_interval_count++;

    let h1 = document.getElementById('inner-content').querySelector('h1');
    if (h1 && typeof h1.innerText !== 'undefined' && h1.innerText.trim().length) {
        document.title = h1.innerText.replace('← / ', '').trim() + ' | ' + originalTitle;
        titleUpdated = true;
    }

    if (titleUpdated || checkAndUpdateTitle_interval_count > 10) {
        clearInterval(checkAndUpdateTitle_interval);
        checkAndUpdateTitle_interval_count = 0;
    }
}


Nova.booting((Vue, router, store) => {
    let originalTitle = document.title;
    router.afterEach((to, from, next) => {

        let resourceMeta = getResourceMeta(to.params.resourceName);
        let relatedResourceMeta = null;

        if (typeof to.params.relatedResourceName !== 'undefined')
            relatedResourceMeta = getResourceMeta(to.params.relatedResourceName)

        let label = to.params.resourceName;

        let toName = to.name;

        if (toName.indexOf('custom-') === 0)
            toName = toName.substr(7);

        if (resourceMeta) {
            if (toName == 'index')
                label = resourceMeta.label;
            else if (toName == 'detail')
                label = resourceMeta.singularLabel + ' #' + to.params.resourceId;
            else if (toName == 'edit-attached')
                label = 'Editar ' + resourceMeta.singularLabel + ' - > ' + relatedResourceMeta.singularLabel
            else if (toName == 'edit')
                label = 'Editar ' + resourceMeta.singularLabel + ' #' + to.params.resourceId;
            else
                label = _.startCase(to.name) + ' ' + resourceMeta.singularLabel;
        } else {
            // label = parseRouteForDisplay(to.path)
            //
            // if (label == '')
            //     label = _.startCase(to.name)
        }

        document.title = label ? label + ' | ' + originalTitle : originalTitle;

        if (!checkAndUpdateTitle_interval_count) {
            checkAndUpdateTitle_interval = setInterval(function() {
                checkAndUpdateTitle(originalTitle);
            }, 1000);
        }

        if (typeof next === 'function')
            next();
    })
});