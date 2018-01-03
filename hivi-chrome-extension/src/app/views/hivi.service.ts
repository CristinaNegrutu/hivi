import {Injectable} from '@angular/core';

declare var chrome;

@Injectable()
export class HiviService {
  public bookmarksList = new Array();


  dumpBookmarks(): void {

    // let dummyArray = JSON.parse(dummyData);


    let dummyArray = chrome.bookmarks.getTree();

    let treeRoot = dummyArray[0];

    let i;
    for (i = 0; i < treeRoot.children.length; i++) {
      let subTree = treeRoot.children[i];

      this.parseSubtree(subTree);

    }
    // console.log(this.bookmarksList);

  }

  parseSubtree(subtree) {
    let i;
    for (i = 0; i < subtree.children.length; i++) {

      if (typeof subtree.children[i].children === "undefined") {
        this.addToBookmarksList(subtree.children[i].url, subtree.children[i].dateAdded);
      } else {
        this.parseSubtree(subtree.children[i])
      }

    }

  }

  spliceToDomain(url) {
    let position = this.getPositionOfThirdSlash(url);

    return url.slice(0, position);
  }

  addToBookmarksList(url, date) {
    let splicedUrl = this.spliceToDomain(url);

    if (typeof this.bookmarksList.find(item => item["key"] == splicedUrl) === "undefined") {
      let entry = {};
      entry["key"] = splicedUrl;
      entry["value"] = {
        "dateAdded": date,
        "occurrences": 1
      };

      this.bookmarksList.push(entry)
    } else {
      this.bookmarksList.find(item => item["key"] == splicedUrl).value.occurrences += 1;
    }

  }

  filterByInterval(since, to) {

  }

  getPositionOfThirdSlash(string, subString = "/", index = 3) {
    return string.split(subString, index).join(subString).length;
  }

  compareItems(a, b) {
    if (a.value.occurrences < b.value.occurrences) {
      return -1;
    }
    if (a.value.occurrences > b.value.occurrences) {
      return 1;
    }
    // a must be equal to b
    return 0;
  }

  getTopMostBookmarked(n = 10) {
    let m = -1 * n;
    let orderedItems = this.bookmarksList.sort(this.compareItems);
    return orderedItems.slice(m - 1, -1).reverse();
  }


  // Pie-Chart related methods
  getPieChartsLabels(): string[] {

    let mostBookmarked = this.getTopMostBookmarked();
    let labels = [];
    let i;
    for (i = 0; i < mostBookmarked.length; i++) {
      labels.push(mostBookmarked[i].key)
    }
    return labels;
  }

  getPieChartData(): number[] {

    let mostBookmarked = this.getTopMostBookmarked();
    let values = [];
    let i;
    for (i = 0; i < mostBookmarked.length; i++) {
      values.push(mostBookmarked[i].value.occurrences)
    }

    return values;
  }

  // Bar-Chart related methods
  getBarChartLabels(): string[] {

    let mostBookmarked = this.getTopMostBookmarked(5);
    let labels = [];
    let i;
    for (i = 0; i < mostBookmarked.length; i++) {
      labels.push(mostBookmarked[i].key)
    }
    console.log(labels)
    return labels
  }

  getBarChartData(): any[] {

    let mostBookmarked = this.getTopMostBookmarked(5);
    let values = [];
    let i;
    for (i = 0; i < mostBookmarked.length; i++) {
      values.push(mostBookmarked[i].value.occurrences)
    }
    console.log(values)


    return [
      {data: values, label: 'Your most bookmarked sites'}
    ];
  }
}
