import Controller from "@ember/controller";
import {action} from "@ember/object";
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class ApplicationController extends Controller {
    @service router;
    @service appState;
    @tracked composeSessions = [];
    @tracked isSidebarOpen = true;

    get currentRoutePath() {
        const path = this.router.currentRouteName || "inbox";

        return path === "index" ? "inbox" : path;
    }

    get selectedCount() {
        return this.appState.queuedItems.length;
    }

    get hasItems() {
        return this.appState.queuedItems.length > 0;
    }

    @action
    onInviteClick() {
        // Send action to route
        this.send('showInvite');
    }

    @action
    onCreateCompose(email = "") {
        let newState = this.composeSessions.slice();
        let length = newState.length;

        newState.unshift({id: length, index: length, to: email});

        this.composeSessions = newState;
    }

    @action
    emptyQueue() {
        this.appState.empty();
    }

    @action
    toggleSideBar() {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    @action
    togglePinnedItems() {
        this.appState.toggleShowPinnedItems();
    }

    @action
    onCloseCompose(id) {
        var composeSessions = this.composeSessions.slice();
        var sessionToRemove = composeSessions.findIndex(c => c.id === id);

        composeSessions.splice(sessionToRemove, 1);

        this.composeSessions = composeSessions;
    }

    @action
    bringToFront(index) {
        let current;
        let highestIndex = 0;
        let composeSessions = this.composeSessions.slice();
        let length = composeSessions.length;
        let startIndex = composeSessions.findIndex(c => c.index === index);

        composeSessions.forEach(c => {
            if (c.index > highestIndex) {
                highestIndex = c.index;
            }
        });

        for (let i = startIndex; i >= 0; i--, highestIndex--) {
            current = composeSessions[i];

            Ember.set(current, "index", highestIndex);
        }

        for (let i = startIndex + 1; i < length; i++, highestIndex--) {
            current = composeSessions[i];

            Ember.set(current, "index", highestIndex);
        }

        this.composeSessions = composeSessions;
    }
}
